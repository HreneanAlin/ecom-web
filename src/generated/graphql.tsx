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
};

export type CheckoutSession = {
  __typename?: "CheckoutSession";
  /** the id of the checkout session */
  _id: Scalars["String"];
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

export type Movie = {
  __typename?: "Movie";
  /** the id of the movie */
  _id: Scalars["String"];
  /** the checkouts of a movie */
  checkoutSessions: Array<CheckoutSession>;
  description: Scalars["String"];
  onSale: Scalars["Boolean"];
  /** price in USD */
  price: Scalars["Int"];
  title: Scalars["String"];
};

export type MovieInput = {
  movieId: Scalars["String"];
  quantity: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  createCheckoutSession: CheckoutSession;
  createMovie: Movie;
  removeMovie: Movie;
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

export type MutationUpdateMovieArgs = {
  updateMovieInput: UpdateMovieInput;
};

export type Query = {
  __typename?: "Query";
  movie: Movie;
  movies: Array<Movie>;
};

export type QueryMovieArgs = {
  id: Scalars["String"];
};

export type UpdateMovieInput = {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
  onSale?: InputMaybe<Scalars["Boolean"]>;
  /** price in USD */
  price?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type MovieFragmentFragment = {
  __typename?: "Movie";
  _id: string;
  title: string;
  price: number;
  description: string;
  onSale: boolean;
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
