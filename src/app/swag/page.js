import PageLayout from '../components/pageLayout';

export default function Swag() {
  return (
    <PageLayout
      // TODO: Consider a linear gradient or image background
      // background="bg-[url('/goofy_bg_500_op_80.png')]"
      title="Get your swag and knick-knacks"
    >
      <div className={"text-md lg:text-xl p-1"}>
        Link to a shopify store. Have page items that display things for sale here, then link to a store.
      </div>
    </PageLayout>
  )
}
