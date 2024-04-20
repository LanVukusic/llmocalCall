/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * Hackathon DH API
 * WIP
 * OpenAPI spec version: 1.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import type {
  CreateMeetingDto,
  CreateRoomDto,
  Meeting,
  Room,
  RoomsControllerCreate201,
  RoomsControllerCreateMeeting201,
  UpdateRoomDto,
} from '.././model';
import { customInstance } from '.././mutator/custom-instance';
import type { ErrorType, BodyType } from '.././mutator/custom-instance';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Create a new room
 */
export const roomsControllerCreate = (
  createRoomDto: BodyType<CreateRoomDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<RoomsControllerCreate201>(
    {
      url: `/rooms`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createRoomDto,
    },
    options,
  );
};

export const getRoomsControllerCreateMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof roomsControllerCreate>>,
    TError,
    { data: BodyType<CreateRoomDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof roomsControllerCreate>>,
  TError,
  { data: BodyType<CreateRoomDto> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof roomsControllerCreate>>,
    { data: BodyType<CreateRoomDto> }
  > = (props) => {
    const { data } = props ?? {};

    return roomsControllerCreate(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type RoomsControllerCreateMutationResult = NonNullable<
  Awaited<ReturnType<typeof roomsControllerCreate>>
>;
export type RoomsControllerCreateMutationBody = BodyType<CreateRoomDto>;
export type RoomsControllerCreateMutationError = ErrorType<unknown>;

/**
 * @summary Create a new room
 */
export const useRoomsControllerCreate = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof roomsControllerCreate>>,
    TError,
    { data: BodyType<CreateRoomDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof roomsControllerCreate>>,
  TError,
  { data: BodyType<CreateRoomDto> },
  TContext
> => {
  const mutationOptions = getRoomsControllerCreateMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Returns all the rooms. No Auth.
 */
export const roomsControllerFindAll = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<Room[]>(
    { url: `/rooms`, method: 'GET', signal },
    options,
  );
};

export const getRoomsControllerFindAllQueryKey = () => {
  return [`/rooms`] as const;
};

export const getRoomsControllerFindAllQueryOptions = <
  TData = Awaited<ReturnType<typeof roomsControllerFindAll>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof roomsControllerFindAll>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getRoomsControllerFindAllQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof roomsControllerFindAll>>
  > = ({ signal }) => roomsControllerFindAll(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof roomsControllerFindAll>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type RoomsControllerFindAllQueryResult = NonNullable<
  Awaited<ReturnType<typeof roomsControllerFindAll>>
>;
export type RoomsControllerFindAllQueryError = ErrorType<unknown>;

/**
 * @summary Returns all the rooms. No Auth.
 */
export const useRoomsControllerFindAll = <
  TData = Awaited<ReturnType<typeof roomsControllerFindAll>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof roomsControllerFindAll>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getRoomsControllerFindAllQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get a room by id. No Auth.
 */
export const roomsControllerFindOne = (
  id: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<Room>(
    { url: `/rooms/${id}`, method: 'GET', signal },
    options,
  );
};

export const getRoomsControllerFindOneQueryKey = (id: string) => {
  return [`/rooms/${id}`] as const;
};

export const getRoomsControllerFindOneQueryOptions = <
  TData = Awaited<ReturnType<typeof roomsControllerFindOne>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof roomsControllerFindOne>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getRoomsControllerFindOneQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof roomsControllerFindOne>>
  > = ({ signal }) => roomsControllerFindOne(id, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof roomsControllerFindOne>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type RoomsControllerFindOneQueryResult = NonNullable<
  Awaited<ReturnType<typeof roomsControllerFindOne>>
>;
export type RoomsControllerFindOneQueryError = ErrorType<unknown>;

/**
 * @summary Get a room by id. No Auth.
 */
export const useRoomsControllerFindOne = <
  TData = Awaited<ReturnType<typeof roomsControllerFindOne>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof roomsControllerFindOne>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getRoomsControllerFindOneQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Update a room by id
 */
export const roomsControllerUpdate = (
  id: string,
  updateRoomDto: BodyType<UpdateRoomDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/rooms/${id}`,
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: updateRoomDto,
    },
    options,
  );
};

export const getRoomsControllerUpdateMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof roomsControllerUpdate>>,
    TError,
    { id: string; data: BodyType<UpdateRoomDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof roomsControllerUpdate>>,
  TError,
  { id: string; data: BodyType<UpdateRoomDto> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof roomsControllerUpdate>>,
    { id: string; data: BodyType<UpdateRoomDto> }
  > = (props) => {
    const { id, data } = props ?? {};

    return roomsControllerUpdate(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type RoomsControllerUpdateMutationResult = NonNullable<
  Awaited<ReturnType<typeof roomsControllerUpdate>>
>;
export type RoomsControllerUpdateMutationBody = BodyType<UpdateRoomDto>;
export type RoomsControllerUpdateMutationError = ErrorType<unknown>;

/**
 * @summary Update a room by id
 */
export const useRoomsControllerUpdate = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof roomsControllerUpdate>>,
    TError,
    { id: string; data: BodyType<UpdateRoomDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof roomsControllerUpdate>>,
  TError,
  { id: string; data: BodyType<UpdateRoomDto> },
  TContext
> => {
  const mutationOptions = getRoomsControllerUpdateMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Delete a room by id
 */
export const roomsControllerRemove = (
  id: string,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    { url: `/rooms/${id}`, method: 'DELETE' },
    options,
  );
};

export const getRoomsControllerRemoveMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof roomsControllerRemove>>,
    TError,
    { id: string },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof roomsControllerRemove>>,
  TError,
  { id: string },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof roomsControllerRemove>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {};

    return roomsControllerRemove(id, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type RoomsControllerRemoveMutationResult = NonNullable<
  Awaited<ReturnType<typeof roomsControllerRemove>>
>;

export type RoomsControllerRemoveMutationError = ErrorType<unknown>;

/**
 * @summary Delete a room by id
 */
export const useRoomsControllerRemove = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof roomsControllerRemove>>,
    TError,
    { id: string },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof roomsControllerRemove>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getRoomsControllerRemoveMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Get all meetings for a room
 */
export const roomsControllerGetMeetings = (
  id: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<Meeting[]>(
    { url: `/rooms/${id}/meetings`, method: 'GET', signal },
    options,
  );
};

export const getRoomsControllerGetMeetingsQueryKey = (id: string) => {
  return [`/rooms/${id}/meetings`] as const;
};

export const getRoomsControllerGetMeetingsQueryOptions = <
  TData = Awaited<ReturnType<typeof roomsControllerGetMeetings>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof roomsControllerGetMeetings>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getRoomsControllerGetMeetingsQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof roomsControllerGetMeetings>>
  > = ({ signal }) => roomsControllerGetMeetings(id, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof roomsControllerGetMeetings>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type RoomsControllerGetMeetingsQueryResult = NonNullable<
  Awaited<ReturnType<typeof roomsControllerGetMeetings>>
>;
export type RoomsControllerGetMeetingsQueryError = ErrorType<unknown>;

/**
 * @summary Get all meetings for a room
 */
export const useRoomsControllerGetMeetings = <
  TData = Awaited<ReturnType<typeof roomsControllerGetMeetings>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof roomsControllerGetMeetings>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getRoomsControllerGetMeetingsQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Create a meeting for a room
 */
export const roomsControllerCreateMeeting = (
  id: string,
  createMeetingDto: BodyType<CreateMeetingDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<RoomsControllerCreateMeeting201>(
    {
      url: `/rooms/${id}/meeting`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createMeetingDto,
    },
    options,
  );
};

export const getRoomsControllerCreateMeetingMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof roomsControllerCreateMeeting>>,
    TError,
    { id: string; data: BodyType<CreateMeetingDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof roomsControllerCreateMeeting>>,
  TError,
  { id: string; data: BodyType<CreateMeetingDto> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof roomsControllerCreateMeeting>>,
    { id: string; data: BodyType<CreateMeetingDto> }
  > = (props) => {
    const { id, data } = props ?? {};

    return roomsControllerCreateMeeting(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type RoomsControllerCreateMeetingMutationResult = NonNullable<
  Awaited<ReturnType<typeof roomsControllerCreateMeeting>>
>;
export type RoomsControllerCreateMeetingMutationBody =
  BodyType<CreateMeetingDto>;
export type RoomsControllerCreateMeetingMutationError = ErrorType<unknown>;

/**
 * @summary Create a meeting for a room
 */
export const useRoomsControllerCreateMeeting = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof roomsControllerCreateMeeting>>,
    TError,
    { id: string; data: BodyType<CreateMeetingDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof roomsControllerCreateMeeting>>,
  TError,
  { id: string; data: BodyType<CreateMeetingDto> },
  TContext
> => {
  const mutationOptions =
    getRoomsControllerCreateMeetingMutationOptions(options);

  return useMutation(mutationOptions);
};
