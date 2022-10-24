import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Song from "../components/song";

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());


const SecondPage = function()
{
    const { data, error } = useSWR('https://x8ki-letl-twmt.n7.xano.io/api:O2BsGMaN/songs/1', fetcher)

console.log(data)

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";


    let chordsLines = data.song_chords.split('\n');

    console.log(chordsLines)


    return(
    <Layout>
        <h1>{data.song_name}</h1>
        <div
            style={{
                whiteSpace: 'pre-wrap',
                lineHeight: '0.2em',
                fontSize: '1.4em'
        }}
        >
            {chordsLines.map(line => <p>{line}</p>)}

        </div>
        <Link to="/">Go back to the homepage</Link>

        <Song/>
    </Layout>
    )
}





export const Head = () => <Seo title="Page two" />

export default SecondPage
