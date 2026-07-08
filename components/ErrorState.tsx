export default function ErrorState({
  title = 'Something went wrong',
  message = 'Please try again in a moment.',
}: {
  title?: string
  message?: string
}) {
  return (
    <div className="mx-auto max-w-md rounded-xl border border-red-100 bg-red-50 p-6 text-center">
      <p className="font-semibold text-red-700">{title}</p>
      <p className="mt-1 text-sm text-red-600">{message}</p>
    </div>
  )
}
