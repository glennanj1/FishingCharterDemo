import { useRouter } from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Page() {
  const router = useRouter()

  return <span style={{"position": "fixed", "top": "8px", "left": "1px"}} onClick={() => router.back()}><ArrowBackIcon/></span>
}