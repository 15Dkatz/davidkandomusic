import PageLayout from '../components/pageLayout';

export default function Studio() {
  return (
    <PageLayout
      // TODO: Consider a linear gradient or image background
      // background="bg-[url('/goofy_bg_500_op_80.png')]"
      title="David Kando Studios"
    >
      <div className={"text-md lg:text-xl p-1"}>
        Let's make music together
        ...
        Check out my studio
        ...
        Audio interface
        ...
        Mic locker
        ...
        Instruments
      </div>
    </PageLayout>
  )
}
