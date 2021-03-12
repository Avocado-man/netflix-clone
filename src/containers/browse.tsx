import React, { useContext, useEffect, useState } from 'react'
// Types
import { BrowseContainerProps } from './Types'
// Container
import SelectProfileContainer from './profiles'
// Context
import { FirebaseContext } from '../context/firebase'
import { Header, Loading } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import Card from '../components/card'

const BrowseContainer: React.FC<BrowseContainerProps> = ({ slides }) => {
  const [category, setCategory] = useState<'series' | 'films'>('series')
  const [searchTerm, setSearchTerm] = useState('')
  const [profile, setProfile] = useState({
    displayName: '',
    photoURL: '',
  })
  const [loading, setLoading] = useState(true)
  const [slideRows, setSlideRows] = useState()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile, profile.displayName])

  useEffect(() => {
    setSlideRows(slides[category])
  }, [category, slides])

  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
            <Header.TextLink
              onClick={(): void => setCategory('series')}
              active={category === 'series' ? 'true' : 'false'}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              onClick={(): void => setCategory('films')}
              active={category === 'films' ? 'true' : 'false'}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink
                    onClick={(): void => firebase.auth().signOut()}
                  >
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he&apos;s part of the
            world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <Card.Group>
        {slideRows.map((item: any) => (
          <Card key={`${category}-${item.title.toLowerCase()}`}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Entities>
              {item.data.map((itemItem: any) => (
                <Card.Item key={itemItem.docId} item={itemItem}>
                  <Card.Image
                    src={`/images/${category}/${itemItem.genre}/${itemItem.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{itemItem.title}</Card.SubTitle>
                    <Card.Text>{itemItem.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <p>Hello</p>
              {/*  <Player> */}
              {/*    <Player.Button /> */}
              {/*    <Player.Video src="/videos/bunny.mp4" /> */}
              {/*  </Player> */}
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}

export default BrowseContainer
