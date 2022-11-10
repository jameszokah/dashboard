import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Link from 'next/link';
import type { NextRouter } from 'next/router';


interface Iproduct {
    readonly title: string;
}

const products: NextPage<Iproduct> = ({title}): JSX.Element => {

    const router:  NextRouter = useRouter();
  const {productId} = router.query;

  return (
  <>
      <h1>{title}</h1>
    <p>{productId}</p>

   <Link href={'/'}>
   <a>Go to home</a   >
   </Link>
    </>
   ); 
  
}

export default products


export const getServerSideProps = async (ctx: any) => {
    const { productId } = ctx.query;
  return {
    props: {title: JSON.stringify(JSON.parse(productId))},
  }
}

// Language: typescript