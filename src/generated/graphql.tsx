import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CheckoutSession = {
  __typename?: "CheckoutSession";
  /** the id of the checkout session */
  _id: Scalars["String"];
  movies: Array<MovieDto>;
  status: Scalars["String"];
  stripeSessionId: Scalars["String"];
  url: Scalars["String"];
};

export type CreateCheckoutSession = {
  products: Array<MovieInput>;
};

export type CreateMovieInput = {
  description: Scalars["String"];
  onSale?: InputMaybe<Scalars["Boolean"]>;
  /** price in USD */
  price: Scalars["Int"];
  title: Scalars["String"];
};

export type CreateUser = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
};

export type Movie = {
  __typename?: "Movie";
  /** the id of the movie */
  _id: Scalars["String"];
  /** the checkouts of a movie */
  checkoutSessions: Array<CheckoutSession>;
  description: Scalars["String"];
  onSale: Scalars["Boolean"];
  /** price in USD */
  price: Scalars["Float"];
  title: Scalars["String"];
};

export type MovieDto = {
  __typename?: "MovieDto";
  _id: Scalars["String"];
  description: Scalars["String"];
  onSale: Scalars["Boolean"];
  price: Scalars["Float"];
  quantity: Scalars["Int"];
  title: Scalars["String"];
};

export type MovieInput = {
  movieId: Scalars["String"];
  quantity: Scalars["Int"];
};

export type MovieWithQuantityDto = {
  __typename?: "MovieWithQuantityDTO";
  _id: Scalars["String"];
  movie: Movie;
  quantity: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  createCheckoutSession: CheckoutSession;
  createMovie: Movie;
  refreshTokens: TokensDto;
  removeMovie: Movie;
  signInLocal: UserWithTokensDto;
  signOut: SignOutDto;
  signUpLocal: UserWithTokensDto;
  updateMovie: Movie;
};

export type MutationCreateCheckoutSessionArgs = {
  createCheckoutSession: CreateCheckoutSession;
};

export type MutationCreateMovieArgs = {
  createMovieInput: CreateMovieInput;
};

export type MutationRemoveMovieArgs = {
  id: Scalars["String"];
};

export type MutationSignInLocalArgs = {
  signInLocal: SignInLocal;
};

export type MutationSignUpLocalArgs = {
  createUserInput: CreateUser;
};

export type MutationUpdateMovieArgs = {
  updateMovieInput: UpdateMovieInput;
};

export type Query = {
  __typename?: "Query";
  checkoutSession: CheckoutSession;
  me: UserDto;
  movie: Movie;
  movies: Array<Movie>;
};

export type QueryCheckoutSessionArgs = {
  id: Scalars["String"];
};

export type QueryMovieArgs = {
  id: Scalars["String"];
};

export type SignInLocal = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type SignOutDto = {
  __typename?: "SignOutDto";
  success: Scalars["Boolean"];
};

export type TokensDto = {
  __typename?: "TokensDto";
  refreshToken: Scalars["String"];
  token: Scalars["String"];
  tokenExpiration: Scalars["DateTime"];
};

export type UpdateMovieInput = {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
  onSale?: InputMaybe<Scalars["Boolean"]>;
  /** price in USD */
  price?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UserDto = {
  __typename?: "UserDto";
  _id: Scalars["String"];
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  movies: Array<MovieWithQuantityDto>;
  openPayments: Array<CheckoutSession>;
  payments: Array<CheckoutSession>;
  updatedAt: Scalars["DateTime"];
};

export type UserWithTokensDto = {
  __typename?: "UserWithTokensDto";
  _id: Scalars["String"];
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  movies: Array<MovieWithQuantityDto>;
  openPayments: Array<CheckoutSession>;
  payments: Array<CheckoutSession>;
  tokens: TokensDto;
  updatedAt: Scalars["DateTime"];
};

export type MovieFragmentFragment = {
  __typename?: "Movie";
  _id: string;
  title: string;
  price: number;
  description: string;
  onSale: boolean;
};

export type TokensFragmentFragment = {
  __typename?: "TokensDto";
  token: string;
  refreshToken: string;
  tokenExpiration: any;
};

export type CreateCheckoutSessionMutationVariables = Exact<{
  createCheckoutSession: CreateCheckoutSession;
}>;

export type CreateCheckoutSessionMutation = {
  __typename?: "Mutation";
  createCheckoutSession: {
    __typename?: "CheckoutSession";
    _id: string;
    url: string;
  };
};

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never }>;

export type RefreshTokensMutation = {
  __typename?: "Mutation";
  refreshTokens: {
    __typename?: "TokensDto";
    token: string;
    refreshToken: string;
    tokenExpiration: any;
  };
};

export type SignInLocalMutationVariables = Exact<{
  signInLocal: SignInLocal;
}>;

export type SignInLocalMutation = {
  __typename?: "Mutation";
  signInLocal: {
    __typename?: "UserWithTokensDto";
    firstName: string;
    lastName: string;
    email: string;
    updatedAt: any;
    createdAt: any;
    tokens: {
      __typename?: "TokensDto";
      token: string;
      refreshToken: string;
      tokenExpiration: any;
    };
  };
};

export type SignOutMutationVariables = Exact<{ [key: string]: never }>;

export type SignOutMutation = {
  __typename?: "Mutation";
  signOut: { __typename?: "SignOutDto"; success: boolean };
};

export type SignUpLocalMutationVariables = Exact<{
  createUserInput: CreateUser;
}>;

export type SignUpLocalMutation = {
  __typename?: "Mutation";
  signUpLocal: {
    __typename?: "UserWithTokensDto";
    _id: string;
    createdAt: any;
    email: string;
    firstName: string;
    lastName: string;
    updatedAt: any;
    tokens: {
      __typename?: "TokensDto";
      token: string;
      refreshToken: string;
      tokenExpiration: any;
    };
  };
};

export type CheckoutSessionQueryVariables = Exact<{
  checkoutSessionId: Scalars["String"];
}>;

export type CheckoutSessionQuery = {
  __typename?: "Query";
  checkoutSession: {
    __typename?: "CheckoutSession";
    _id: string;
    status: string;
    stripeSessionId: string;
    url: string;
    movies: Array<{
      __typename?: "MovieDto";
      _id: string;
      description: string;
      onSale: boolean;
      price: number;
      quantity: number;
      title: string;
    }>;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me: {
    __typename?: "UserDto";
    _id: string;
    lastName: string;
    firstName: string;
    email: string;
    createdAt: any;
    updatedAt: any;
    openPayments: Array<{
      __typename?: "CheckoutSession";
      _id: string;
      status: string;
      url: string;
    }>;
    movies: Array<{
      __typename?: "MovieWithQuantityDTO";
      _id: string;
      quantity: number;
      movie: {
        __typename?: "Movie";
        _id: string;
        title: string;
        price: number;
        description: string;
        onSale: boolean;
      };
    }>;
  };
};

export type MovieQueryVariables = Exact<{
  movieId: Scalars["String"];
}>;

export type MovieQuery = {
  __typename?: "Query";
  movie: {
    __typename?: "Movie";
    _id: string;
    title: string;
    price: number;
    description: string;
    onSale: boolean;
  };
};

export type MoviesQueryVariables = Exact<{ [key: string]: never }>;

export type MoviesQuery = {
  __typename?: "Query";
  movies: Array<{
    __typename?: "Movie";
    _id: string;
    title: string;
    price: number;
    description: string;
    onSale: boolean;
  }>;
};

export const MovieFragmentFragmentDoc = gql`
  fragment MovieFragment on Movie {
    _id
    title
    price
    description
    onSale
  }
`;
export const TokensFragmentFragmentDoc = gql`
  fragment TokensFragment on TokensDto {
    token
    refreshToken
    tokenExpiration
  }
`;
export const CreateCheckoutSessionDocument = gql`
  mutation CreateCheckoutSession(
    $createCheckoutSession: CreateCheckoutSession!
  ) {
    createCheckoutSession(createCheckoutSession: $createCheckoutSession) {
      _id
      url
    }
  }
`;
export type CreateCheckoutSessionMutationFn = Apollo.MutationFunction<
  CreateCheckoutSessionMutation,
  CreateCheckoutSessionMutationVariables
>;

/**
 * __useCreateCheckoutSessionMutation__
 *
 * To run a mutation, you first call `useCreateCheckoutSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCheckoutSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCheckoutSessionMutation, { data, loading, error }] = useCreateCheckoutSessionMutation({
 *   variables: {
 *      createCheckoutSession: // value for 'createCheckoutSession'
 *   },
 * });
 */
export function useCreateCheckoutSessionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCheckoutSessionMutation,
    CreateCheckoutSessionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCheckoutSessionMutation,
    CreateCheckoutSessionMutationVariables
  >(CreateCheckoutSessionDocument, options);
}
export type CreateCheckoutSessionMutationHookResult = ReturnType<
  typeof useCreateCheckoutSessionMutation
>;
export type CreateCheckoutSessionMutationResult =
  Apollo.MutationResult<CreateCheckoutSessionMutation>;
export type CreateCheckoutSessionMutationOptions = Apollo.BaseMutationOptions<
  CreateCheckoutSessionMutation,
  CreateCheckoutSessionMutationVariables
>;
export const RefreshTokensDocument = gql`
  mutation RefreshTokens {
    refreshTokens {
      ...TokensFragment
    }
  }
  ${TokensFragmentFragmentDoc}
`;
export type RefreshTokensMutationFn = Apollo.MutationFunction<
  RefreshTokensMutation,
  RefreshTokensMutationVariables
>;

/**
 * __useRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokensMutation, { data, loading, error }] = useRefreshTokensMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokensMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefreshTokensMutation,
    RefreshTokensMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RefreshTokensMutation,
    RefreshTokensMutationVariables
  >(RefreshTokensDocument, options);
}
export type RefreshTokensMutationHookResult = ReturnType<
  typeof useRefreshTokensMutation
>;
export type RefreshTokensMutationResult =
  Apollo.MutationResult<RefreshTokensMutation>;
export type RefreshTokensMutationOptions = Apollo.BaseMutationOptions<
  RefreshTokensMutation,
  RefreshTokensMutationVariables
>;
export const SignInLocalDocument = gql`
  mutation SignInLocal($signInLocal: SignInLocal!) {
    signInLocal(signInLocal: $signInLocal) {
      tokens {
        ...TokensFragment
      }
      firstName
      lastName
      email
      updatedAt
      createdAt
    }
  }
  ${TokensFragmentFragmentDoc}
`;
export type SignInLocalMutationFn = Apollo.MutationFunction<
  SignInLocalMutation,
  SignInLocalMutationVariables
>;

/**
 * __useSignInLocalMutation__
 *
 * To run a mutation, you first call `useSignInLocalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInLocalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInLocalMutation, { data, loading, error }] = useSignInLocalMutation({
 *   variables: {
 *      signInLocal: // value for 'signInLocal'
 *   },
 * });
 */
export function useSignInLocalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInLocalMutation,
    SignInLocalMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInLocalMutation, SignInLocalMutationVariables>(
    SignInLocalDocument,
    options
  );
}
export type SignInLocalMutationHookResult = ReturnType<
  typeof useSignInLocalMutation
>;
export type SignInLocalMutationResult =
  Apollo.MutationResult<SignInLocalMutation>;
export type SignInLocalMutationOptions = Apollo.BaseMutationOptions<
  SignInLocalMutation,
  SignInLocalMutationVariables
>;
export const SignOutDocument = gql`
  mutation SignOut {
    signOut {
      success
    }
  }
`;
export type SignOutMutationFn = Apollo.MutationFunction<
  SignOutMutation,
  SignOutMutationVariables
>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignOutMutation,
    SignOutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(
    SignOutDocument,
    options
  );
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<
  SignOutMutation,
  SignOutMutationVariables
>;
export const SignUpLocalDocument = gql`
  mutation SignUpLocal($createUserInput: CreateUser!) {
    signUpLocal(createUserInput: $createUserInput) {
      _id
      createdAt
      email
      firstName
      lastName
      tokens {
        ...TokensFragment
      }
      updatedAt
    }
  }
  ${TokensFragmentFragmentDoc}
`;
export type SignUpLocalMutationFn = Apollo.MutationFunction<
  SignUpLocalMutation,
  SignUpLocalMutationVariables
>;

/**
 * __useSignUpLocalMutation__
 *
 * To run a mutation, you first call `useSignUpLocalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpLocalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpLocalMutation, { data, loading, error }] = useSignUpLocalMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useSignUpLocalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpLocalMutation,
    SignUpLocalMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpLocalMutation, SignUpLocalMutationVariables>(
    SignUpLocalDocument,
    options
  );
}
export type SignUpLocalMutationHookResult = ReturnType<
  typeof useSignUpLocalMutation
>;
export type SignUpLocalMutationResult =
  Apollo.MutationResult<SignUpLocalMutation>;
export type SignUpLocalMutationOptions = Apollo.BaseMutationOptions<
  SignUpLocalMutation,
  SignUpLocalMutationVariables
>;
export const CheckoutSessionDocument = gql`
  query CheckoutSession($checkoutSessionId: String!) {
    checkoutSession(id: $checkoutSessionId) {
      _id
      status
      stripeSessionId
      url
      movies {
        _id
        description
        onSale
        price
        quantity
        title
      }
    }
  }
`;

/**
 * __useCheckoutSessionQuery__
 *
 * To run a query within a React component, call `useCheckoutSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckoutSessionQuery({
 *   variables: {
 *      checkoutSessionId: // value for 'checkoutSessionId'
 *   },
 * });
 */
export function useCheckoutSessionQuery(
  baseOptions: Apollo.QueryHookOptions<
    CheckoutSessionQuery,
    CheckoutSessionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CheckoutSessionQuery, CheckoutSessionQueryVariables>(
    CheckoutSessionDocument,
    options
  );
}
export function useCheckoutSessionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CheckoutSessionQuery,
    CheckoutSessionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CheckoutSessionQuery,
    CheckoutSessionQueryVariables
  >(CheckoutSessionDocument, options);
}
export type CheckoutSessionQueryHookResult = ReturnType<
  typeof useCheckoutSessionQuery
>;
export type CheckoutSessionLazyQueryHookResult = ReturnType<
  typeof useCheckoutSessionLazyQuery
>;
export type CheckoutSessionQueryResult = Apollo.QueryResult<
  CheckoutSessionQuery,
  CheckoutSessionQueryVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      _id
      lastName
      firstName
      email
      createdAt
      updatedAt
      openPayments {
        _id
        status
        url
      }
      movies {
        _id
        quantity
        movie {
          ...MovieFragment
        }
      }
    }
  }
  ${MovieFragmentFragmentDoc}
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MovieDocument = gql`
  query Movie($movieId: String!) {
    movie(id: $movieId) {
      ...MovieFragment
    }
  }
  ${MovieFragmentFragmentDoc}
`;

/**
 * __useMovieQuery__
 *
 * To run a query within a React component, call `useMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useMovieQuery(
  baseOptions: Apollo.QueryHookOptions<MovieQuery, MovieQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MovieQuery, MovieQueryVariables>(
    MovieDocument,
    options
  );
}
export function useMovieLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MovieQuery, MovieQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MovieQuery, MovieQueryVariables>(
    MovieDocument,
    options
  );
}
export type MovieQueryHookResult = ReturnType<typeof useMovieQuery>;
export type MovieLazyQueryHookResult = ReturnType<typeof useMovieLazyQuery>;
export type MovieQueryResult = Apollo.QueryResult<
  MovieQuery,
  MovieQueryVariables
>;
export const MoviesDocument = gql`
  query Movies {
    movies {
      ...MovieFragment
    }
  }
  ${MovieFragmentFragmentDoc}
`;

/**
 * __useMoviesQuery__
 *
 * To run a query within a React component, call `useMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoviesQuery(
  baseOptions?: Apollo.QueryHookOptions<MoviesQuery, MoviesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MoviesQuery, MoviesQueryVariables>(
    MoviesDocument,
    options
  );
}
export function useMoviesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MoviesQuery, MoviesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MoviesQuery, MoviesQueryVariables>(
    MoviesDocument,
    options
  );
}
export type MoviesQueryHookResult = ReturnType<typeof useMoviesQuery>;
export type MoviesLazyQueryHookResult = ReturnType<typeof useMoviesLazyQuery>;
export type MoviesQueryResult = Apollo.QueryResult<
  MoviesQuery,
  MoviesQueryVariables
>;
