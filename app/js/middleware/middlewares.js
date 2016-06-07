exports.promiseMiddleware = (store) => (next) => (action) => {
  const {
    type, payload,
  } = action;

  if (!payload || !payload.then) { return next(action); }

  const defaultFetching = `${type}_FETCHING`;
  const defaultSucceed = `${type}_SUCCEED`;
  const defaultFailed  = `${type}_FAILED`;

  next({ type: defaultFetching });

  return payload.then(
    (data) => next({ type: defaultSucceed, data }),
    (error) => next({ type: defaultFailed, error })
  );
};
