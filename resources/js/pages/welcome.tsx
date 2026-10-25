import {Head} from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout2';

export default function Welcome() {
 return (
      <AppLayout>
        <Head title="Welcome"/>
          <div className="hero bg-base-200 h-72">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
              Hakuna Matata what a wonderful day .
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </AppLayout>
    );
}
