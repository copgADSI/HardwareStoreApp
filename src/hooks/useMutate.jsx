export const useMutate = () => {
    const { mutate, isSuccess } = useMutation(updateTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries(['todos'])
        }
    })
    return (
        <div>useMutate</div>
    )
}

export default useMutate