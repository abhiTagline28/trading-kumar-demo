import { type ReactElement } from 'react';
import Button from '@/components/programs/Button';

export default function PricingSection(): ReactElement {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-black">
              The Strategist Advantage: Stop Patching, Start Mastering.
            </h2>
            <p className="mb-4 text-gray-700">
              Most traders try to buy one module at a time, spending over ₹3,51,000 to
              piece together a fragmented system.
            </p>
            <p className="text-gray-700">
              The Institutional Order Flow & Volume Footprint Trading Strategist Program
              gives you the Complete 15-Module Curriculum + the Full Volume Footprint &
              Full Volume Profile (Value Map) Strategy in one cohesive blueprint.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6">
            <div className="text-center">
              <p className="mb-4 text-2xl font-bold text-black">
                Total Specialized Module Value: ₹3,51,000
              </p>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6">
              <div>
                <p className="mb-2 text-lg font-semibold text-black">
                  The Institutional Order Flow & Volume Footprint Trading Strategist
                  Program (Group)
                </p>
                <p className="text-2xl font-bold text-blue-600">₹69,000</p>
                <p className="text-sm text-green-600">(You Save ₹2.82 Lakhs)</p>
              </div>

              <div>
                <p className="mb-2 text-lg font-semibold text-black">
                  The Institutional Order Flow & Volume Footprint Trading Strategist
                  Program (VIP 1-on-1)
                </p>
                <p className="text-2xl font-bold text-blue-600">₹99,000</p>
                <p className="text-sm text-gray-600">(Ultimate Value)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
