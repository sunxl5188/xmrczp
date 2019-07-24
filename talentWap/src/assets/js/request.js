class requestA {
	constructor () {
		this.baseUrl = "http://www.xmgxrc.com/GaoxinApi/api/info"
		this.timeOut = 3000
		this.responsetype = "json"
		this.responseEncoding = "utf8"
		//this.headers = {"X-Requested-with":"XMLHttpRequest"}
		this.headers = {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}
	}

	setError (handler) {
		this._errorHandler = handler
	}

	getRequest (url, params) {
		return this.requestAll(url, params, "GET")
	}

	postRequest (url, params) {
		return this.requestAll(url, params, "POST")
	}

	patchRequest (url, params) {
		return this.requestAll(url, params, "PATCH")
	}

	putRequest (url, params) {
		return this.requestAll(url, params, "PUT")
	}

	optionsRequest (url, params) {
		return this.requestAll(url, params, "OPTIONS")
	}

	headRequest (url, params) {
		return this.requestAll(url, params, "HEAD")
	}

	reqRequest (url, params) {
		return this.requestAll(url, params, "REQUEST")
	}

	deleteRequest (url, params) {
		return this.requestAll(url, params, "DELETE")
	}

	requestAll (url, params, method) {
		let config
		config = {
			method: method, // `method`是发起请求时的方法
			url: url, // `url`是服务器链接，用来请求
			baseURL: this.baseUrl, // `baseURL`如果`url`不是绝对地址，那么将会加在其前面。
			headers: this.headers, // headers是自定义的要被发送的信息头
			timeout: this.timeOut, // 设定超时
			withCredentials: false, // 表明跨跨域请求书否需要证明
			responsetype: this.responsetype, // 'arraybuffer','blob','document','json','text',stream'
			responseEncoding: this.responseEncoding
		}
		if (method === "POST" || method === "PUT" || method === "PATCH") {
			config.data = params
		} else {
			config.params = params
		}
		return new Promise((resolve, reject) => {
			// 添加一个请求拦截器
			axios.interceptors.request.use(function (config) {
				return config
			}, function (error) {
				return Promise.reject(error)
			})
			// 添加一个响应拦截器
			axios.interceptors.response.use(function (response) {
				return response
			}, function (error) {
				return Promise.reject(error)
			})

			axios(config)
				.then(res => {
					if (res.status === 200) {
						resolve(res.data)
					} else {
						if (this._errorHandler != null) {
							this._errorHandler(res)
						}
						reject(res)
					}
				})
				.catch(res => {
					if (this._errorHandler != null) {
						this._errorHandler(res)
					}
					reject(res)
				})
		})
	}
}

let request = new requestA()
export default request
