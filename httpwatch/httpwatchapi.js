var httpwatchapi = {};
httpwatchapi.api = {"Entry":{"URL":1,"Method":1,"Started":1,"StartedSecs":1,"StartedDateTime":1,"Time":1,"Result":1,"CacheBefore":"CacheInfo","CacheAfter":"CacheInfo","ServerIP":1,"ServerPort":1,"ClientIP":1,"ClientPort":1,"Request":"Request","Response":"Response","Content":"Content","IsRestrictedURL":1,"BytesSent":1,"BytesReceived":1,"IsComplete":1,"StatusCode":1,"Error":1,"IsRedirect":1,"RedirectURL":1,"Page":false,"Timings":"Timings","Warnings":["Warning"]},"Content":{"MimeType":1,"Size":1,"IsFromCache":1,"IsCompressed":1,"CompressedSize":1,"CompressionType":1,"Data":1,"IsImage":1,"ImageWidth":1,"ImageHeight":1},"Summary":{"Time":1,"RoundTrips":1,"BytesSent":1,"BytesReceived":1,"CompressionSavedBytes":1,"DNSLookUps":1,"TCPConnects":1,"TotalHTTPSOverhead":1,"AverageHTTPSOverhead":1,"StatusCodes":["ResultSummary"],"Errors":["ResultSummary"],"TimingSummaries":"TimingSummaries","WarningSummaries":["WarningSummary"]},"CacheInfo":{"URLInCache":1,"Expires":1,"IsExpiresSet":1,"LastUpdate":1,"LastAccess":1,"LastModified":1,"IsLastModifiedSet":1,"ETag":1,"HitCount":1},"Request":{"RequestLine":1,"Cookies":["Cookie"],"Headers":["Header"],"POSTParameters":["POSTParameter"],"POSTMimeType":1,"QueryStringValues":["QueryStringValue"],"Stream":1},"Response":{"StatusLine":1,"Cookies":["Cookie"],"Headers":["Header"],"Stream":1,"Chunks":1},"Timings":{"Blocked":"Timing","DNSLookup":"Timing","Connect":"Timing","Send":"Timing","Wait":"Timing","Receive":"Timing","TTFB":"Timing","Network":"Timing","CacheRead":"Timing"},"Timing":{"Valid":1,"Started":1,"Duration":1},"Cookie":{"Name":1,"Value":1,"Domain":1,"Path":1,"Expires":1,"IsSessionCookie":1,"Source":1,"IsHttpOnly":1,"IsHttpOnlyKnown":1,"IsSecure":1,"IsSecureKnown":1},"Warning":{"Code":1,"ID":1,"Type":1,"Description":1},"WarningSummary":{"Code":1,"ID":1,"Type":1,"Description":1,"Occurrences":1},"ResultSummary":{"Result":1,"Description":1,"Occurrences":1},"TimingSummaries":{"Blocked":"TimingSummary","DNSLookup":"TimingSummary","Connect":"TimingSummary","Send":"TimingSummary","Wait":"TimingSummary","Receive":"TimingSummary","TTFB":"TimingSummary","Network":"TimingSummary","CacheRead":"TimingSummary"},"TimingSummary":{"Minimum":1,"Maximum":1,"Total":1,"Average":1,"Occurrences":1},"Header":{"Name":1,"Value":1},"QueryStringValue":{"Name":1,"Value":1}}
httpwatchapi.paidproperties = {"CacheBefore":1,"CacheAfter":1,"ServerIP":1,"ServerPort":1,"ClientIP":1,"ClientPort":1,"Request":1,"Response":1,"Content":1,"BytesSent":1,"Timings":1,"Warnings":1,"TimingSummaries":1,"WarningSummaries":1}