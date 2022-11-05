const args = process.argv.slice(2)

const unirest = require('unirest')

const authJWT = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJuYmYiOjE2NjI0MjI0MDAsImFwaV9zdWIiOiIzNzU5NzA2ZjQxMGMyMTdjODYyMTZhOGZhZGIzMDY1NDc0YmRmZjNkNDdiNDg5ZGM1OTk1NzQyYTE0ZTY5ZDQxMTY3NTEyMzIwMDAwMCIsInBsYyI6IjVkY2VjNzRhZTk3NzAxMGUwM2FkNjQ5NSIsImV4cCI6MTY3NTEyMzIwMCwiZGV2ZWxvcGVyX2lkIjoiMzc1OTcwNmY0MTBjMjE3Yzg2MjE2YThmYWRiMzA2NTQ3NGJkZmYzZDQ3YjQ4OWRjNTk5NTc0MmExNGU2OWQ0MSJ9.Mijhmrl5GOeD6qrSpj4NHZlT3hx6DT8WE-OqP-5kwcS7EIA_DScaaRVpqCflKJraLbFaNXz7DJR6lliN9VrQJvnu-4aLQonFfazLk8Nf8Fujd2C81Z-BenNSTY1PApFS18WVHaS2VNolC_UufXNfCigBDkr5emEB1Q52gLdQBPdGb_YMO04g0ln5YNIe0YARzDniT37NjF6rux6iguUbajGF35hVJkzIfpvMPz-FCXcehBsocPAhUyhakeBS-0cjeCcTTRMAgB_O3zKPSQ6QyOtVjQsqxIS6rRThTk1hu9pbRvR4amoe73ZYt_yjFYQM68IYdpRldZi9kjnGhdrUKQ"

switch (args[0]) {
    case 'createDummyAccounts':
        var req = unirest('POST', 'https://api-gateway-public.clouddqt.uk.capitalone.com/developer-services-platform-pp/api/data/accounts/create')
        .headers({
            'Content-Type': 'application/json',
            'Version': '1.0',
            'Authorization': 'Bearer ' + authJWT + '\n'
        })
        .send("{\n\t\"quantity\": " + args[1] + ",\n\t\"numTransactions\": " + args[2] + ",\n\t\"state\": \"open\"}")
        .end(function (res) {
            if (res.error) throw new Error(res.error);
            console.log(res.raw_body);
        });

        break;
}