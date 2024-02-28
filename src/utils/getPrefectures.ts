//都道府県コードの取得

import { GET_PREFECURES_URL } from "./ResasApi"

const header = {
    'X-API-KEY':process.env.RESAS_API_KEY as string
} as const

export type prefectures = {
    massage: null
    result:{
        prefCode: number,
        prefName: string
    }[]
}



export const getPrefecures = async ():Promise<prefectures[]> => {
    const result = await fetch(
        GET_PREFECURES_URL,
        {
            method: 'GET',
            headers: header
        }
    )
    if (result.status !== 200) throw Error();
    const json = await result.json()
    return json
}