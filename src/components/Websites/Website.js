import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FoodIndustry from '../../FoodIndustry/FoodIndustry';

const Website = () => {
    const [businessType, setBusinessType] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [businessMission, setBusinessMission] = useState('')
    const [businessDomain, setBusinessDomain] = useState('')

    useEffect(() => {
        axios.get("http://localhost:5000/getAll").then((res) => {
          setBusinessType(res.data[res.data.length - 1].businessType)
          setCompanyName(res.data[res.data.length - 1].businessName)
          setPhoneNumber(res.data[res.data.length - 1].phoneNumber)
          setBusinessMission(res.data[res.data.length - 1].businessMission)
          setBusinessDomain(res.data[res.data.length - 1].businessMission)
        });
      }, []);
    return (

        <div>
            {businessType === 'food' ? <FoodIndustry
                companyName = {companyName}
                phoneNumber = {phoneNumber}
                businessMission = {businessMission}
                businessDomain = {businessDomain}
            /> : null }
        </div>
    )
}

export default Website
