export default function PageTitle({ title }: { title: string }) {
    return (
        <h1 className="text-2xl font-semibold text-center title">
            {title}
        </h1>
    );
  }