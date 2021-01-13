import React, { Dispatch, SetStateAction } from 'react'
// Components
import Header from '../components/header'
// Routes
import * as ROUTES from '../constants/routes'
// Logo
import logo from '../logo.svg'
import { Profiles } from '../components'

type SelectProfileProps = {
  user: any
  setProfile: Dispatch<SetStateAction<any>>
}

const SelectProfileContainer: React.FC<SelectProfileProps> = ({
  user,
  setProfile,
}: any) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who&apos;s watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={(): void =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}

export default SelectProfileContainer
