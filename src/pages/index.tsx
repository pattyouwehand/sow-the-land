import Head from "next/head"
import Image from "next/image"
import { gql, useQuery } from "@apollo/client"
import type { Crop } from "@prisma/client"

const AllCropsQuery = gql`
  query {
    crops {
      id
      title
      url
      description
      imageUrl
      category
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(AllCropsQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Whooops... {error.message}</p>

  return (
    <div>
      <Head>
        <title>Sow the land</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto my-20">
        <ul className="flex flex-wrap gap-5">
          {data.crops.map((crop:Crop) => (
            <li key={crop.id} className="border border-gray-500 bg-gray-400 shadow rounded">
            <Image
              className="shadow-sm"
              src={crop.imageUrl}
              alt="test"
              width={250}
              height={250}
            />
            <div className="p-5 flex flex-col space-y-2">
              <p className="text-sm">{crop.category}</p>
              <p className="text-lg font-medium">{crop.title}</p>
              <p className="text-gray-600">{crop.description}</p>
              <a href={crop.url} className="flex hover:text-blue-500">
                <div className="flex"><p>Read more about</p>{crop.title}</div>
              </a>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}