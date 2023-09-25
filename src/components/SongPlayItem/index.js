import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const SongPlayItem = props => {
  const {songItem, onClickDeletePlayItem} = props
  const {id, imageUrl, name, genre, duration} = songItem

  const onClickDelete = () => {
    onClickDeletePlayItem(id)
  }

  return (
    <li className="song-items">
      <div className="song-img-genre-name-container">
        <img src={imageUrl} alt="track" className="song-image" />
        <div>
          <p className="song-name">{name}</p>
          <p className="genre-name">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration-time">{duration}</p>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <AiOutlineDelete size={20} color="#ffffff" />
        </button>
      </div>
    </li>
  )
}

export default SongPlayItem
