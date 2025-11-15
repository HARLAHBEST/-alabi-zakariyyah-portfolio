export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} <strong className="text-foreground">Alabi Zakariyyah Olamilekan</strong>. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Built with ❤️ using React, Next.js, Tailwind CSS, and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};
