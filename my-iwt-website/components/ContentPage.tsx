type ContentPageProps = {
  title: string;
  description: string;
};

export default function ContentPage({ title, description }: ContentPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-iwt-navy mb-4">{title}</h1>
      <p className="text-xl text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
