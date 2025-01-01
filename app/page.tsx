import { IntegrationForm } from "@/components/integrations/integrations-form";
import { Preview } from "@/components/integrations/preview";

export default function Home() {
  return (
    <div className="flex ">
      <div className="flex-1 p-6 h-[92vh] overflow-y-scroll">
        <div className="flex items-center gap-2 text-sm mb-6">
          <a href="/integrations" className="text-teal-500 hover:underline">
            All Integrations
          </a>
          <span className="text-gray-500">/</span>
          <span>Edit integration</span>
        </div>
        
        {/* <div className="bg-teal-100 text-teal-900 p-4 rounded-lg mb-8">
          Integration updated
        </div> */}

        <IntegrationForm />
      </div>
      
      <div className="hidden lg:flex w-[450px] bg-gray-100 border-l items-center justify-center">
        <Preview />
      </div>
    </div>
  );
}
