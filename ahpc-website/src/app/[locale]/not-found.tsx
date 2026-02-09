import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary-600">404</div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          الصفحة غير موجودة
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ar"
            className="btn-primary"
          >
            العودة للرئيسية
          </Link>
          <Link
            href="/en"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
