
from vital_ai_vitalsigns.model.properties.BooleanProperty import BooleanProperty
from vital_ai_vitalsigns.model.properties.DateTimeProperty import DateTimeProperty
from vital_ai_vitalsigns.model.properties.DoubleProperty import DoubleProperty
from vital_ai_vitalsigns.model.properties.FloatProperty import FloatProperty
from vital_ai_vitalsigns.model.properties.GeoLocationProperty import GeoLocationProperty
from vital_ai_vitalsigns.model.properties.IntegerProperty import IntegerProperty
from vital_ai_vitalsigns.model.properties.LongProperty import LongProperty
from vital_ai_vitalsigns.model.properties.OtherProperty import OtherProperty
from vital_ai_vitalsigns.model.properties.StringProperty import StringProperty
from vital_ai_vitalsigns.model.properties.TruthProperty import TruthProperty
from vital_ai_vitalsigns.model.properties.URIProperty import URIProperty
from vital_ai_vitalsigns_core.model.VITAL_TaxonomyEdge import VITAL_TaxonomyEdge


class Edge_hasSelectedRecommendationModel(VITAL_TaxonomyEdge):
    _allowed_properties = [
        {'uri': 'http://vital.ai/ontology/haley-ai-ml#hasSelectedRecommendationModelName', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/haley-ai-ml#isGlobalRecommendationModel', 'prop_class': BooleanProperty}, 
    ]

    @classmethod
    def get_allowed_properties(cls):
        return super().get_allowed_properties() + Edge_hasSelectedRecommendationModel._allowed_properties

