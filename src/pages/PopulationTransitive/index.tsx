import React, { useEffect, useState } from "react"
import Header from "@/compnents/header"
import List from "@/compnents/prefecturesList"
import Chart from "@/compnents/chart"
import { getPrefecures, prefectures } from "@/utils/getPrefectures"
import { getPopulationConfiguration } from "@/utils/getPopulationComposition"

export default function Home() {
  const [ prefectures, setPrefectuers ] = useState<
    | {
      message: null
      result: {
        prefCode: number,
        prefName: string,
      }[]
    } | null
  >(null)
  const [ prefPopulation, setPrefPopulation] = useState<
    {
      prefName: string,
      data: {
        year: number,
        value: number,
      }[]
    }[]
  >([])

  useEffect(() => {
    
    getPrefecures().then((result) => {
      // fix 型を修正する
      setPrefectuers(result)
    })
    .catch((e) => {})
  }, [])



  const clickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    let count = prefPopulation?.slice()

    if (check) {
      if (count?.findIndex((value) => value.prefName === prefName) !== -1)
      return

      getPopulationConfiguration(prefCode)
      .then((results) => {
        count?.push({
          prefName: prefName,
          data: results.result.data[0].data
        })

        setPrefPopulation(count)
      })
      .catch((e) => {
        return
      })
    } else {
      const deleteChartData = count?.findIndex((value) => value.prefName === prefName)
      if  (deleteChartData === -1) return;
      count?.splice(deleteChartData, 1)
      setPrefPopulation(count)
    }
  }
  

  return (
    <main>
      <div>
        <Header />
        { prefectures && (
          <List 
            prefectures={prefectures.result}
            onChange={clickCheck}
        />
        )}

        <div>
          <Chart PopulationData={prefPopulation} />
        </div>
      </div>
    </main>
  )
}
