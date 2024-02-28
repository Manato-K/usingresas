// 人口推移の取得

import { GET_POPULATION_CONFIGURATION_URL } from "./ResasApi"

const header = {
    'X-API-KEY':process.env.RESAS_API_KEY as string
} as const 


export const getPopulationConfiguration = async (
    prefCode: number,
):Promise<any> => {
    // fix 型を修正する。
    const result = await fetch(
        GET_POPULATION_CONFIGURATION_URL + String(prefCode),
        {
            method: 'GET',
            headers: header
        }
    )
    if (result.status !== 200) throw Error();
    const json = await result.json()
    return json
}