import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Detail({ params }: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const [title, id] = (router.query.params as string[]) ?? [];
  return (
    <div>
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

export function getServerSideProps({
  params: { params },
}: {
  params: { params: [string, number] };
}) {
  return {
    props: { params },
  };
}
