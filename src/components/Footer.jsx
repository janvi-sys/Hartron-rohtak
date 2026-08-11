export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Hartron Advanced Skill Center Rohtak. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">Authorized Training Center under HARTRON</p>
      </div>
    </footer>
  );
}