import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
function AccordPage() {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
        <main className="w-[500px] p-4">
        <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
       <AccordionTrigger>Is it accessible?</AccordionTrigger>
         <AccordionContent>
                 Yes. It adheres to the WAI-ARIA design pattern.
         </AccordionContent>
    </AccordionItem>
    </Accordion>
    </main>
    <div className="flex justify-center items-center">
    <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
    </div>

  )
}

export default AccordPage
