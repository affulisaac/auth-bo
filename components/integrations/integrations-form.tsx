import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Camera } from "lucide-react"
import { ThemeSelector } from "./theme-selector"

export function IntegrationForm() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h2 className="text-lg font-medium mb-4">Add Product Logo</h2>
        <div className="flex items-center gap-3">
           <div className="border-2 border-dashed border-gray-200 rounded-full w-24 h-24 flex items-center justify-center">
          <Camera className="h-8 w-8 text-gray-400" />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Upload PNG, JPEG, and SVG <br/>images not more than 20MB.
        </p>  
        </div>
       
      </div>

      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="productName">Product Name</Label>
          <Input 
            id="productName" 
            placeholder="Enter Product Name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="productName">App Name</Label>
          <Input 
            id="productName" 
            placeholder="Enter Product Name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="productName">Phone Number Lookup Url</Label>
          <Input 
            id="productName" 
            placeholder="Enter Product Name"
          />
        </div>
        
        
        <div className="space-y-2">
          <Label htmlFor="senderId">Sender ID</Label>
          <Input 
            id="senderId" 
            placeholder="Enter Sender ID"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="appId">Token validity period</Label>
          <Input 
            id="appId" 
            type="number"
            placeholder="Enter App ID"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lookupUrl">Account Lookup URL</Label>
          <Input 
            id="lookupUrl" 
            placeholder="Enter Account Lookup URL"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-medium">
          Select method to verify the user phone number
        </h3>
        <div className="space-y-3">
          {[
            'USSD',
            'QR Code',
            'WhatsApp',
            'Email',
            'SMS'
          ].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox id={option} />
              <label
                htmlFor={option}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-base font-medium">Login Colour Theme</h3>
          <p className="text-sm text-gray-500">
            Select a theme that fits well with your login.
          </p>
        </div>
        <ThemeSelector />
      </div>
    </div>
  )
}
