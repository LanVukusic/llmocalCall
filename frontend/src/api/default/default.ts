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
import type { CreateConnectorDto, UpdateConnectorDto } from '.././model';
import { customInstance } from '.././mutator/custom-instance';
import type { ErrorType, BodyType } from '.././mutator/custom-instance';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const connectorsControllerCreate = (
  createConnectorDto: BodyType<CreateConnectorDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<string>(
    {
      url: `/connectors`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createConnectorDto,
    },
    options,
  );
};

export const getConnectorsControllerCreateMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof connectorsControllerCreate>>,
    TError,
    { data: BodyType<CreateConnectorDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof connectorsControllerCreate>>,
  TError,
  { data: BodyType<CreateConnectorDto> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof connectorsControllerCreate>>,
    { data: BodyType<CreateConnectorDto> }
  > = (props) => {
    const { data } = props ?? {};

    return connectorsControllerCreate(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ConnectorsControllerCreateMutationResult = NonNullable<
  Awaited<ReturnType<typeof connectorsControllerCreate>>
>;
export type ConnectorsControllerCreateMutationBody =
  BodyType<CreateConnectorDto>;
export type ConnectorsControllerCreateMutationError = ErrorType<unknown>;

export const useConnectorsControllerCreate = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof connectorsControllerCreate>>,
    TError,
    { data: BodyType<CreateConnectorDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof connectorsControllerCreate>>,
  TError,
  { data: BodyType<CreateConnectorDto> },
  TContext
> => {
  const mutationOptions = getConnectorsControllerCreateMutationOptions(options);

  return useMutation(mutationOptions);
};
export const connectorsControllerFindAll = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<string>(
    { url: `/connectors`, method: 'GET', signal },
    options,
  );
};

export const getConnectorsControllerFindAllQueryKey = () => {
  return [`/connectors`] as const;
};

export const getConnectorsControllerFindAllQueryOptions = <
  TData = Awaited<ReturnType<typeof connectorsControllerFindAll>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof connectorsControllerFindAll>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getConnectorsControllerFindAllQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof connectorsControllerFindAll>>
  > = ({ signal }) => connectorsControllerFindAll(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof connectorsControllerFindAll>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ConnectorsControllerFindAllQueryResult = NonNullable<
  Awaited<ReturnType<typeof connectorsControllerFindAll>>
>;
export type ConnectorsControllerFindAllQueryError = ErrorType<unknown>;

export const useConnectorsControllerFindAll = <
  TData = Awaited<ReturnType<typeof connectorsControllerFindAll>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof connectorsControllerFindAll>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getConnectorsControllerFindAllQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const connectorsControllerFindOne = (
  id: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<string>(
    { url: `/connectors/${id}`, method: 'GET', signal },
    options,
  );
};

export const getConnectorsControllerFindOneQueryKey = (id: string) => {
  return [`/connectors/${id}`] as const;
};

export const getConnectorsControllerFindOneQueryOptions = <
  TData = Awaited<ReturnType<typeof connectorsControllerFindOne>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof connectorsControllerFindOne>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getConnectorsControllerFindOneQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof connectorsControllerFindOne>>
  > = ({ signal }) => connectorsControllerFindOne(id, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof connectorsControllerFindOne>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ConnectorsControllerFindOneQueryResult = NonNullable<
  Awaited<ReturnType<typeof connectorsControllerFindOne>>
>;
export type ConnectorsControllerFindOneQueryError = ErrorType<unknown>;

export const useConnectorsControllerFindOne = <
  TData = Awaited<ReturnType<typeof connectorsControllerFindOne>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof connectorsControllerFindOne>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getConnectorsControllerFindOneQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const connectorsControllerUpdate = (
  id: string,
  updateConnectorDto: BodyType<UpdateConnectorDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<string>(
    {
      url: `/connectors/${id}`,
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: updateConnectorDto,
    },
    options,
  );
};

export const getConnectorsControllerUpdateMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof connectorsControllerUpdate>>,
    TError,
    { id: string; data: BodyType<UpdateConnectorDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof connectorsControllerUpdate>>,
  TError,
  { id: string; data: BodyType<UpdateConnectorDto> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof connectorsControllerUpdate>>,
    { id: string; data: BodyType<UpdateConnectorDto> }
  > = (props) => {
    const { id, data } = props ?? {};

    return connectorsControllerUpdate(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ConnectorsControllerUpdateMutationResult = NonNullable<
  Awaited<ReturnType<typeof connectorsControllerUpdate>>
>;
export type ConnectorsControllerUpdateMutationBody =
  BodyType<UpdateConnectorDto>;
export type ConnectorsControllerUpdateMutationError = ErrorType<unknown>;

export const useConnectorsControllerUpdate = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof connectorsControllerUpdate>>,
    TError,
    { id: string; data: BodyType<UpdateConnectorDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof connectorsControllerUpdate>>,
  TError,
  { id: string; data: BodyType<UpdateConnectorDto> },
  TContext
> => {
  const mutationOptions = getConnectorsControllerUpdateMutationOptions(options);

  return useMutation(mutationOptions);
};
export const connectorsControllerRemove = (
  id: string,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<string>(
    { url: `/connectors/${id}`, method: 'DELETE' },
    options,
  );
};

export const getConnectorsControllerRemoveMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof connectorsControllerRemove>>,
    TError,
    { id: string },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof connectorsControllerRemove>>,
  TError,
  { id: string },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof connectorsControllerRemove>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {};

    return connectorsControllerRemove(id, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ConnectorsControllerRemoveMutationResult = NonNullable<
  Awaited<ReturnType<typeof connectorsControllerRemove>>
>;

export type ConnectorsControllerRemoveMutationError = ErrorType<unknown>;

export const useConnectorsControllerRemove = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof connectorsControllerRemove>>,
    TError,
    { id: string },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof connectorsControllerRemove>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getConnectorsControllerRemoveMutationOptions(options);

  return useMutation(mutationOptions);
};
