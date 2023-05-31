import PageLayout from '../components/pageLayout';

// Use some logic to display the corresponding spotify embedded player
// Is there a programmatic way to server-side generate the pages/routes?
export default function Record() {
  return (
    <PageLayout
      // TODO: Consider a linear gradient or image background
      // background="bg-[url('/goofy_bg_500_op_80.png')]"
      // TODO: Render the title here as well
      title="Hot off the press"
    >
      <div className={"text-md lg:text-xl p-1"}>
        Spotify embedded player
      </div>
    </PageLayout>
  )
}
