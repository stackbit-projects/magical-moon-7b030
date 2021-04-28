import React from "react";
import Layout from "../components/layout"

import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut, AmplifyConfirmSignIn } from '@aws-amplify/ui-react';

import Amplify, { Auth } from "aws-amplify";
import awsConfig from "./../aws-exports"

Amplify.configure(awsConfig)

const Profile = () => (
  <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: "Email",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            required: true,
          },
        ]}
      />
    <AmplifySignIn slot="sign-in" usernameAlias="email" />
    <AmplifyConfirmSignIn
      headerText="Confirmation code was sent to your email"
      slot="confirm-sign-in"
    ></AmplifyConfirmSignIn>

    <Layout>
        <AmplifySignOut />
        Profile
    </Layout>
  </AmplifyAuthenticator>
)

export default Profile

