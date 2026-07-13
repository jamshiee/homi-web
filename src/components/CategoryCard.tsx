type CategoryCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function CategoryCard({ title, description, icon }: CategoryCardProps) {
  return (
    <article className="card-flat flex flex-col gap-4 transition-colors hover:border-brand">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-2xl" role="img" aria-hidden>
        {icon}
      </span>
      <div>
        <h3 className="text-lg font-semibold text-dark">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}
