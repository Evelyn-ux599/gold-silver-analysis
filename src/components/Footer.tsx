export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-text-secondary">
        <p>&copy; {new Date().getFullYear()} Guanchulin. Built with Next.js.</p>
      </div>
    </footer>
  );
}
