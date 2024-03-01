// 人口推移の取得

import { API_KEY, GET_POPULATION_CONFIGURATION_URL } from "./ResasApi"

const header = {
    'X-API-KEY':API_KEY || ""
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