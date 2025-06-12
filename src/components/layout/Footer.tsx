export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-8">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Aarogyadhama. All rights reserved.</p>
        <p className="mt-2">
          Designed with <span className="text-primary">&hearts;</span> for holistic well-being.
        </p>
      </div>
    </footer>
  );
}
