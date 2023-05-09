import Link from "next/link";

const Page = async () => {
  // Resolve after 10s.
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return (
    <Link href="/">
      Go to home
    </Link>
  );
};

export default Page;
