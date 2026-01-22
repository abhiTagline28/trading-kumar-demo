import Link from 'next/link';

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      <div className="mx-auto w-[85%] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-black">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources/trading-advice"
                  className="text-gray-600 hover:text-black"
                >
                  Trading Advice
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/crypto"
                  className="text-gray-600 hover:text-black"
                >
                  Crypto
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/futures-options"
                  className="text-gray-600 hover:text-black"
                >
                  Future & Options
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/commodity"
                  className="text-gray-600 hover:text-black"
                >
                  Commodity
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/forex"
                  className="text-gray-600 hover:text-black"
                >
                  Forex
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/stocks"
                  className="text-gray-600 hover:text-black"
                >
                  Stocks
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/etfs"
                  className="text-gray-600 hover:text-black"
                >
                  ETFs and More
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-black">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-gray-600 hover:text-black"
                >
                  Get Help
                </Link>
              </li>
              <li>
                <Link
                  href="/help/payment-options"
                  className="text-gray-600 hover:text-black"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  href="/help/refund-cancellation"
                  className="text-gray-600 hover:text-black"
                >
                  Refund and Cancellation
                </Link>
              </li>
              <li>
                <Link
                  href="/help/contact"
                  className="text-gray-600 hover:text-black"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-black">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-black"
                >
                  About Kumar Singh
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="text-gray-600 hover:text-black"
                >
                  Kumar Singh Global Trading Academy (OPC) Pvt. Ltd.
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-black"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-600 hover:text-black"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg font-semibold text-black">India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-300 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span>Copyright {currentYear}, Kumar Singh All Rights Reserved</span>
              <Link
                href="/terms"
                className="hover:text-black"
              >
                Terms Of Use
              </Link>
              <Link
                href="/privacy"
                className="hover:text-black"
              >
                Kumar Singh Privacy Policy
              </Link>
              <Link
                href="/disclaimer"
                className="hover:text-black"
              >
                Disclaimer
              </Link>
              <Link
                href="/complaints"
                className="hover:text-black"
              >
                Complaints
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              World-class original trading research & mentorship, built in India.
              Trusted by traders worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
