/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * Hackathon DH API
 * WIP
 * OpenAPI spec version: 1.0
 */
import { useMutation } from '@tanstack/react-query';
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import type { UpdateMeetingDto } from '.././model';
import { customInstance } from '.././mutator/custom-instance';
import type { ErrorType, BodyType } from '.././mutator/custom-instance';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const meetingsControllerUpdate = (
  id: string,
  updateMeetingDto: BodyType<UpdateMeetingDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/meetings/${id}`,
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: updateMeetingDto,
    },
    options,
  );
};

export const getMeetingsControllerUpdateMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof meetingsControllerUpdate>>,
    TError,
    { id: string; data: BodyType<UpdateMeetingDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof meetingsControllerUpdate>>,
  TError,
  { id: string; data: BodyType<UpdateMeetingDto> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof meetingsControllerUpdate>>,
    { id: string; data: BodyType<UpdateMeetingDto> }
  > = (props) => {
    const { id, data } = props ?? {};

    return meetingsControllerUpdate(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type MeetingsControllerUpdateMutationResult = NonNullable<
  Awaited<ReturnType<typeof meetingsControllerUpdate>>
>;
export type MeetingsControllerUpdateMutationBody = BodyType<UpdateMeetingDto>;
export type MeetingsControllerUpdateMutationError = ErrorType<unknown>;

export const useMeetingsControllerUpdate = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof meetingsControllerUpdate>>,
    TError,
    { id: string; data: BodyType<UpdateMeetingDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof meetingsControllerUpdate>>,
  TError,
  { id: string; data: BodyType<UpdateMeetingDto> },
  TContext
> => {
  const mutationOptions = getMeetingsControllerUpdateMutationOptions(options);

  return useMutation(mutationOptions);
};
export const meetingsControllerRemove = (
  id: string,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    { url: `/meetings/${id}`, method: 'DELETE' },
    options,
  );
};

export const getMeetingsControllerRemoveMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof meetingsControllerRemove>>,
    TError,
    { id: string },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof meetingsControllerRemove>>,
  TError,
  { id: string },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof meetingsControllerRemove>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {};

    return meetingsControllerRemove(id, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type MeetingsControllerRemoveMutationResult = NonNullable<
  Awaited<ReturnType<typeof meetingsControllerRemove>>
>;

export type MeetingsControllerRemoveMutationError = ErrorType<unknown>;

export const useMeetingsControllerRemove = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof meetingsControllerRemove>>,
    TError,
    { id: string },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof meetingsControllerRemove>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getMeetingsControllerRemoveMutationOptions(options);

  return useMutation(mutationOptions);
};
