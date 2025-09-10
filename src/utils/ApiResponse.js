
export default class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400; // 2xx & 3xx = true, 4xx & 5xx = false
  }
}

/*
Agar statusCode 200–399 (success range) hoga to success = true hona chahiye.
Agar statusCode >= 400 hoga to success = false hona chahiye.
*/