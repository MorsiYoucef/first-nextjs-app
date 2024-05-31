const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`)
  return res.json()
}

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`)
  return res.json()
}

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`)
  return res.json()
}

interface params {
  params: { name: string }
}

export default async function Page(params: params) {
  const ageData = getPredictedAge(params.params.name)
  const CountryData = getPredictedCountry(params.params.name)
  const genderData = getPredictedGender(params.params.name)

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    CountryData,
  ])
  return (
    <div>
      <div>
        <div>Personal info</div>
        <div>Age: {age?.age}</div>
        <div>Gender: {gender?.gender}</div>
        <div>Country: {country?.country[0]?.country}</div>
      </div>
    </div>
  )
}
