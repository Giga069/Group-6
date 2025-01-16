import { Button, Description, Field, Input, Label } from "@headlessui/react"
import { useState } from "react"

const Todolist = () => {
  const [vale, setValue] = useState()



  return (
    <div className="my-2">
      <div className="flex flex-col gap-3">
        <Field>
          <input
          className={" mt-3 block w-full rounded-lg border bg-gray/5 -py-1.5 "}
          />
        </Field>

        <div>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Name</Label>
          <Description className="text-sm/6 text-white/50">Use your real name so people will recognize you.</Description>
          <Input
            className={" mt-3 block w-full rounded-lg border bg-black/5 py-1.5 px-4 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"}
            />
      </Field>
          <div className="border border-gray-500 px-4">content</div>
        </div>

        <div className="flex gap-4">

          <Button className="rounded bg-green-600 py-2 px-4 text-sm text-white data-[hover]:bg-green-500 data-[active]:bg-green-700">
            Add
          </Button>

          <Button className="rounded bg-red-600 py-2 px-4 text-sm text-white data-[hover]:bg-red-500 data-[active]:bg-red-700">
            Remove
          </Button>

        </div>
      </div>
    </div>
  )
}

export default Todolist
