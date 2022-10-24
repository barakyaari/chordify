import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {useEffect} from "react";



const Song = () => (

<div>
    Hello I am a song!
</div>
)

Song.propTypes = {
      name: PropTypes.string,
    chords: PropTypes.string,
}

Song.defaultProps = {
    name: ``,
    chords: ``,
}

export default Song
