import { Metadata } from 'next';
import Image from 'next/image';
import { ClientButtons } from './ClientButtons';

interface PropertyPageProps {
  params: { id: string };
}

// Fetch property data from backend public endpoint
async function getProperty(id: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';
  
  try {
    const res = await fetch(`${API_URL}/properties/${id}/public`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Failed to fetch property:", error);
    return null;
  }
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const property = await getProperty(params.id);
  
  if (!property) {
    return { title: 'Property Not Found | Homi Holdings' };
  }

  const title = property.title || `${property.type} in ${property.locality}, ${property.district} | Homi Holdings`;
  const description = property.description || `Check out this amazing property in ${property.locality}.`;
  
  // Find cover image
  const coverMedia = property.propertyMedia?.find((m: any) => m.isCover)?.media?.url 
    || property.propertyMedia?.[0]?.media?.url 
    || 'https://homiholdings.com/default-og.jpg'; // fallback

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [coverMedia],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [coverMedia],
    }
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const property = await getProperty(params.id);

  if (!property) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">Property not found</h1>
          <p className="text-gray-500">This property might have been removed or does not exist.</p>
        </div>
      </div>
    );
  }

  const coverMedia = property.propertyMedia?.find((m: any) => m.isCover)?.media?.url 
    || property.propertyMedia?.[0]?.media?.url;
    
  const appLink = `homi://property/${property.id}`;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="mx-auto max-w-3xl bg-white shadow-sm sm:mt-10 sm:overflow-hidden sm:rounded-xl">
        {coverMedia ? (
          <div className="relative h-64 w-full sm:h-96">
            <Image 
              src={coverMedia} 
              alt={property.title || "Property Cover"}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="flex h-64 w-full items-center justify-center bg-gray-200 sm:h-96">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
        
        <div className="p-6">
          <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#FFC914]">
            {property.transactionType}
          </div>
          <h1 className="mb-2 text-2xl font-bold capitalize text-gray-900 sm:text-3xl">
            {property.title || `${property.type} for ${property.transactionType}`}
          </h1>
          <p className="mb-4 text-2xl font-bold text-gray-800">₹{property.price}</p>
          
          <div className="mb-6 flex items-center text-gray-600">
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="capitalize">{property.locality}, {property.district}</span>
          </div>

          <div className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">Description</h2>
            <p className="whitespace-pre-line text-gray-700">
              {property.description || "No description provided."}
            </p>
          </div>

          <ClientButtons appLink={appLink} />
        </div>
      </div>
    </div>
  );
}
