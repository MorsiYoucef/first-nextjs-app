interface Params {
  params: { name: string }
}

const Page = ({ params }: any) => {
  return <div>{params.name}</div>
}

export default Page
