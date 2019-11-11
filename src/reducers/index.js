import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {title: 'Yesterday', duration: '2:50'},
        {title: 'All My Loving', duration: '3:10'},
        {title: 'Lovely Rita', duration: '4:15'},
        {title: 'Dont Pass Me By', duration: '5:11'}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})