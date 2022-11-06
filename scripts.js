const args = process.argv.slice(2)

const unirest = require('unirest')

const authJWT = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJuYmYiOjE2NjI0MjI0MDAsImFwaV9zdWIiOiIzNzU5NzA2ZjQxMGMyMTdjODYyMTZhOGZhZGIzMDY1NDc0YmRmZjNkNDdiNDg5ZGM1OTk1NzQyYTE0ZTY5ZDQxMTY3NTEyMzIwMDAwMCIsInBsYyI6IjVkY2VjNzRhZTk3NzAxMGUwM2FkNjQ5NSIsImV4cCI6MTY3NTEyMzIwMCwiZGV2ZWxvcGVyX2lkIjoiMzc1OTcwNmY0MTBjMjE3Yzg2MjE2YThmYWRiMzA2NTQ3NGJkZmYzZDQ3YjQ4OWRjNTk5NTc0MmExNGU2OWQ0MSJ9.Mijhmrl5GOeD6qrSpj4NHZlT3hx6DT8WE-OqP-5kwcS7EIA_DScaaRVpqCflKJraLbFaNXz7DJR6lliN9VrQJvnu-4aLQonFfazLk8Nf8Fujd2C81Z-BenNSTY1PApFS18WVHaS2VNolC_UufXNfCigBDkr5emEB1Q52gLdQBPdGb_YMO04g0ln5YNIe0YARzDniT37NjF6rux6iguUbajGF35hVJkzIfpvMPz-FCXcehBsocPAhUyhakeBS-0cjeCcTTRMAgB_O3zKPSQ6QyOtVjQsqxIS6rRThTk1hu9pbRvR4amoe73ZYt_yjFYQM68IYdpRldZi9kjnGhdrUKQ"

switch (args[0]) {
    case 'createAccounts':
        console.log(JSON.stringify({"quantity": args[1], "numTransactions": args[2], "state": "open"}))

        var req = unirest('POST', 'https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts/create')
        .headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authJWT,
            'Version': '1.0'
        })
        .send(JSON.stringify({"quantity": args[1], "numTransactions": args[2], "state": "open"}))
        .end(function (res) {
            if (res.error) throw new Error(res.error)
            console.log(res.raw_body)
        })

        break
    case 'listAccounts':
        var req = unirest('GET', 'https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts')
        .headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authJWT,
            'version': '1.0'
        })
        .end(function (res) {
            if (res.error) throw new Error(res.error)
            console.log(res.raw_body)
        })
        break
    case "padTransactions":
        var req = unirest('POST', 'https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/' + args[1] + '/create')
        .headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authJWT,
            'version': '1.0'
        })
        .send(JSON.stringify({"quantity": args[2]}))
        .end(function (res) {
            if (res.error) throw new Error(res.error)
            console.log(res.raw_body)
        })
        break
    case "getTransactions":
        var req = unirest('GET', 'https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/' + args[1] + '/transactions')
        .headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authJWT,
            'version': '1.0'
        })
        // .query("status", "eq:Successful")
        // .query("amount", "gte:12.34")
        // .query("amount", "lt:43.21")
        .end(function (res) {
            if (res.error) throw new Error(res.error);
            console.log(res.raw_body);
        })
        break
}


setTimeout(function() {
    console.log('time out')
}, 2000)