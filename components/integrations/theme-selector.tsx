import { cn } from "@/lib/utils"

const themes = [
  { name: 'Yellow', colors: ['#000000', '#FFFFFF', '#FFD700'] },
  { name: 'Yellow', colors: ['#FFD700', '#000000'] },
  { name: 'Teal', colors: ['#00B8A9', '#F0F0F0'] },
  { name: 'Green', colors: ['#00875A', '#E3FCEF'] },
  { name: 'Blue', colors: ['#0052CC', '#DEEBFF'] },
  { name: 'Purple', colors: ['#6554C0', '#EAE6FF'] },
]

export function ThemeSelector() {
  return (
    <div className="flex gap-4 flex-wrap">
      {themes.map((theme) => (
        <div
          key={theme.name + theme.colors.join()}
          className="space-y-2"
        >
          <button
            className={cn(
              "h-14 w-32 rounded border-2 p-1 cursor-pointer hover:border-gray-400",
              theme.name === 'Yellow' && theme.colors.length === 3 && "border-black"
            )}
          >
            <div className="h-full w-full flex">
              {theme.colors.map((color) => (
                <div
                  key={color}
                  className="flex-1 h-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
          <p className="text-sm text-center">{theme.name}</p>
        </div>
      ))}
    </div>
  )
}
